<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ArchievedController extends Controller
{
    public function index()
    {
        $dbQuery = DB::table('achieved');
                $dbQuery->select(
                    DB::raw('COUNT(achieved.id) as total'),

                    DB::raw(' sum( ( CASE WHEN achieved.Sector = 1 THEN 1 ELSE 0 END  ) )  as sum_manufacturing_primary_sector'),
                    DB::raw(' sum( ( CASE WHEN achieved.Sector = 2 THEN 1 ELSE 0 END  ) )  as sum_manufacturing_secondary_sector '),

                    DB::raw(' sum( ( CASE WHEN achieved.SampleType = 1 THEN 1 ELSE 0 END  ) )  as sum_sample_2019'),
                    DB::raw(' sum( ( CASE WHEN achieved.SampleType = 2 THEN 1 ELSE 0 END  ) )  as sum_sample_2022 '),

                    DB::raw(' sum( ( CASE WHEN achieved.FirmSize = 1 THEN 1 ELSE 0 END  ) )  as sum_firmsize_A'),
                    DB::raw(' sum( ( CASE WHEN achieved.FirmSize = 2 THEN 1 ELSE 0 END  ) )  as sum_firmsize_B '),
                    DB::raw(' sum( ( CASE WHEN achieved.FirmSize = 3 THEN 1 ELSE 0 END  ) )  as sum_firmsize_C '),

                );

//
//        for ($x = 1; $x <= 24; $x++) {
//            $dbQuery2->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_food_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_bev_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_tobacco_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_textile_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_apparel_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_leather_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_wood_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_paper_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_print_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_coke_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_chemicals_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_pharma_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_rubber_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_minerals_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_metals_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_feb_metals_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_electronics_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_electrical_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_machinery_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_electrical_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_vehicles_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_transport_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_furn_$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_manuf_{$x} "));
//              $dbQuery->select( DB::raw(" sum( ( CASE WHEN achieved.Q_H_O{$x} = {$x} THEN 1 ELSE 0 END  ) )  as sum_repair_{$x} "));
//        }







            $data = $dbQuery->get();
//            dd($data);
             $chartData = [];

            return Inertia::render('Sample/Achieved', [
                'page' => 'main menu',
                'chartData' => $data,
                'Age' => "",

            ]);




    }

    public function getPercentage($total, $value)
    {
        return ($value);
    }



}
