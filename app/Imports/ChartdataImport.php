<?php

namespace App\Imports;

use App\Models\Archieved;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;

class ChartdataImport implements ToModel
{
    public function model(array $row)
    {
//        dd($row);
        return new Archieved([
            'SbjNum' => $row[0],
            'Province' => $row[1],
            'Sector' => $row[2],
            'FirmSize' => $row[3],
            'Q1' => $row[4],
            'Q1a' => $row[5],
            'Q1b' => $row[6],
            'Q1c_Male' => $row[7],
            'Q1c_Female' => $row[8],
            'Q2' => $row[9],
        ]);


    }
}
