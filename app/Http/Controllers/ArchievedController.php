<?php

namespace App\Http\Controllers;

use App\Models\Archieved;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ArchievedController extends Controller
{
    public function index()
    {
        $dbQuery = Archieved::select(
            DB::raw('COUNT(achieved.id) as total'),

            DB::raw('sum( ( CASE WHEN achieved.Sector = 1 THEN 1 ELSE 0 END  ) )  as sum_manufacturing_primary_sector'),
            DB::raw('sum( ( CASE WHEN achieved.Sector = 2 THEN 1 ELSE 0 END  ) )  as sum_manufacturing_secondary_sector '),

            DB::raw('sum( ( CASE WHEN achieved.SampleType = 1 THEN 1 ELSE 0 END  ) )  as sum_sample_2019'),
            DB::raw('sum( ( CASE WHEN achieved.SampleType = 2 THEN 1 ELSE 0 END  ) )  as sum_sample_2022 '),

            DB::raw('sum( ( CASE WHEN achieved.FirmSize = 1 THEN 1 ELSE 0 END  ) )  as sum_firmsize_A'),
            DB::raw('sum( ( CASE WHEN achieved.FirmSize = 2 THEN 1 ELSE 0 END  ) )  as sum_firmsize_B '),
            DB::raw('sum( ( CASE WHEN achieved.FirmSize = 3 THEN 1 ELSE 0 END  ) )  as sum_firmsize_C '),

        );
        $data = $dbQuery->get();

       $manufacturingData =  DB::table('achieved')->select(
           'Q_H_O1',
           'Q_H_O2',
           'Q_H_O3',
           'Q_H_O4',
           'Q_H_O5',
           'Q_H_O6',
           'Q_H_O7',
           'Q_H_O8',
           'Q_H_O9',
           'Q_H_O10',
           'Q_H_O11',
           'Q_H_O12',
           'Q_H_O13',
           'Q_H_O14',
           'Q_H_O15',
           'Q_H_O16',
           'Q_H_O17',
           'Q_H_O18',
           'Q_H_O19',
           'Q_H_O20',
           'Q_H_O21',
           'Q_H_O22',
           'Q_H_O23',
           'Q_H_O24',

       );

        $getData = $manufacturingData->get();

        $groupManufacturingData =  $this->Manufacturing($getData);


        return Inertia::render('Sample/Achieved', [
            'page' => 'main menu',
            'chartData' => $data,
            'manufacturing_table' => $groupManufacturingData,

        ]);


    }

    public function getPercentage($total, $values)
    {
        return ($values);
    }


    private function Manufacturing(\Illuminate\Support\Collection $collection):array
    {
        $data = [];

        foreach ($collection as $key => $nested) {
            foreach ( $nested as $values) {
                switch ($values) {
                    case 1 :
                        $data['manufacturing_of_food'][] = $values;
                        break;
                    case 2 :
                        $data['manufacturing_of_beverage'][] = $values;
                        break;
                    case 3 :
                        $data['manufacturing_of_tobacco'][] = $values;
                        break;
                    case 4:
                        $data['manufacturing_of_textiles'][] = $values;
                        break;
                    case 5:
                        $data['manufacturing_of_apparel'][] = $values;
                        break;
                    case 6:
                        $data['manufacturing_of_leather'][] = $values;
                        break;
                    case 7:
                        $data['manufacturing_of_wood_products'][] = $values;
                        break;
                    case 8:
                        $data['manufacturing_of_paper'][] = $values;
                        break;
                    case 9:
                        $data['manufacturing_of_recorded_media'][] = $values;
                        break;
                    case 10:
                        $data['manufacturing_of_petroleum'][] = $values;
                        break;
                    case 11:
                        $data['manufacturing_of_chemicals'][] = $values;
                        break;
                    case 12:
                        $data['manufacturing_of_botanical'][] = $values;
                        break;
                    case 13:
                        $data['manufacturing_of_rubber'][] = $values;
                        break;
                    case 14:
                        $data['manufacturing_of_non_metallic_mineral'][] = $values;
                        break;
                    case 15:
                        $data['manufacturing_of_basic_metals'][] = $values;
                        break;
                    case 16:
                        $data['manufacturing_of_fabricated_metal'][] = $values;
                        break;
                    case 17:
                        $data['manufacturing_of_electronics'][] = $values;
                        break;
                    case 18:
                        $data['manufacturing_of_electrical'][] = $values;
                        break;
                    case 19:
                        $data['manufacturing_of_machinery'][] = $values;
                        break;
                    case 20:
                        $data['manufacturing_of_vehicles'][] = $values;
                        break;
                    case 21:
                        $data['manufacturing_of_transport'][] = $values;
                        break;
                    case 22:
                        $data['manufacturing_of_furniture'][] = $values;
                        break;
                    case 23:
                        $data['manufacturing_of_Other'][] = $values;
                        break;
                    case 24:
                        $data['manufacturing_of_Repair'][] = $values;
                        break;



                }
            }
        }
        return $data;
    }
}
