<?php

namespace App\Http\Controllers;

use App\Imports\ChartdataImport;
use App\Models\Archieved;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel;

class AdminController extends Controller
{
    public function index()
    {
        $tableStats = [];
        $dataSample = Archieved::count();
        ($dataSample) > 1
            ? array_push($tableStats, ['status' => true, 'title' => 'Achieved Sample', 'count' => ($dataSample)])
            : array_push($tableStats, ['status' => false, 'title' => 'Achieved Sample']);

        if (in_array(Auth::user()->username, ['developer','itayi'])) {
            return Inertia::render('Admin/admin', [
                'page' => 'admin',
                'stats' => $tableStats
            ]);
        } else {
            return Inertia::render('Main');
        }
    }

    public function fileImport(Request $request)
    {
        $table = 'achieved';

        $file = $request->file('records')->storeAs(
            'private',
            $table . ".csv"
        );
        Storage::delete(storage_path('private/' . $table . '.csv'));
        DB::table($table)->truncate();
        $cols = '
            SbjNum,
            Q_H_O1,
            Q_H_O2,
            Q_H_O3,
            Q_H_O4,
            Q_H_O5,
            Q_H_O6,
            Q_H_O7,
            Q_H_O8,
            Q_H_O9,
            Q_H_O10,
            Q_H_O11,
            Q_H_O12,
            Q_H_O13,
            Q_H_O14,
            Q_H_O15,
            Q_H_O16,
            Q_H_O17,
            Q_H_O18,
            Q_H_O19,
            Q_H_O20,
            Q_H_O21,
            Q_H_O22,
            Q_H_O23,
            Q_H_O24,
            Q13,
            Q22_O1,
            Q22_O2,
            Q22_O3,
            Q22_O4,
            Q22_O5,
            Q22_O6,
            Q22_O7,
            Q64,
            Q64a_O1,
            Q64a_O2,
            Q64a_O3,
            Q64a_O4,
            S_Q64a_4,
            GPS_LA,
            GPS_LO,
            TotalQ40,
            FirmSize,
            Sector,
            SampleType,
            TotalQ40a';

        $dataFile = str_replace('\\', '/', (addslashes(base_path('storage/app/' . $file))));
        $dataFile = str_replace('//', '/', $dataFile);
        $query = "LOAD DATA LOCAL INFILE  '" . $dataFile . "'
                    INTO TABLE " . $table . "
                    FIELDS TERMINATED BY ','
                    LINES TERMINATED BY '\n'
                    IGNORE 1 LINES
        (
       " . $cols . "
        )";
        DB::connection()->getpdo()->exec($query);
        return back();
    }

    public function clearData(Request $request)
    {
        $table = 'achieved';

        Storage::delete(storage_path('private/' . $table . '.csv'));
        DB::table($table)->truncate();

        return back();
    }
}
