<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        $dbQuery = DB::table('achieved');
        $dbQuery2 = DB::table('achieved');
        $gps = $dbQuery2->select('achieved.Latitude','achieved.Longitude')->get();

        $dbQuery->select(
            DB::raw('COUNT(achieved.id) as total'),

            DB::raw(' sum( ( CASE WHEN achieved.Q64 = 1 THEN 1 ELSE 0 END  ) )  as yes'),
            DB::raw(' sum( ( CASE WHEN achieved.Q64 = 2 THEN 1 ELSE 0 END  ) )  as no '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64 = 3 THEN 1 ELSE 0 END  ) )  as dont_know '),

            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O1 = 1 THEN 1 ELSE 0 END  ) )  as sars_1'),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O1 = 2 THEN 1 ELSE 0 END  ) )  as local_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O1 = 3 THEN 1 ELSE 0 END  ) )  as business_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O1 = 4 THEN 1 ELSE 0 END  ) )  as other_business_1 '),

            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O2 = 1 THEN 1 ELSE 0 END  ) )  as sars_2'),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O2 = 2 THEN 1 ELSE 0 END  ) )  as local_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O2 = 3 THEN 1 ELSE 0 END  ) )  as business_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O2 = 4 THEN 1 ELSE 0 END  ) )  as other_business_2 '),

          DB::raw(' sum( ( CASE WHEN achieved.Q64a_O3 = 1 THEN 1 ELSE 0 END  ) )  as sars_3'),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O3 = 2 THEN 1 ELSE 0 END  ) )  as local_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O3 = 3 THEN 1 ELSE 0 END  ) )  as business_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O3 = 4 THEN 1 ELSE 0 END  ) )  as other_business_3 '),

            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O4 = 1 THEN 1 ELSE 0 END  ) )  as sars_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O4 = 2 THEN 1 ELSE 0 END  ) )  as local_4 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O4 = 3 THEN 1 ELSE 0 END  ) )  as business_4 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q64a_O4 = 4 THEN 1 ELSE 0 END  ) )  as other_business_4 '),


            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 1 THEN 1 ELSE 0 END  ) )  as new_products_1'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 3 THEN 1 ELSE 0 END  ) )  as new_services_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_1  '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_1 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O1 = 7 THEN 1 ELSE 0 END  ) )  as other_1 '),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 1 THEN 1 ELSE 0 END  ) )  as new_products_2'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 3 THEN 1 ELSE 0 END  ) )  as new_services_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_2  '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_2 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O2 = 7 THEN 1 ELSE 0 END  ) )  as other_2 '),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 1 THEN 1 ELSE 0 END  ) )  as new_products_3'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 3 THEN 1 ELSE 0 END  ) )  as new_services_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_3 '),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_3'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O3 = 7 THEN 1 ELSE 0 END  ) )  as other_3'),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 1 THEN 1 ELSE 0 END  ) )  as new_products_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 3 THEN 1 ELSE 0 END  ) )  as new_services_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_4'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O4 = 7 THEN 1 ELSE 0 END  ) )  as other_4'),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 1 THEN 1 ELSE 0 END  ) )  as new_products_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 3 THEN 1 ELSE 0 END  ) )  as new_services_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_5'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O5 = 7 THEN 1 ELSE 0 END  ) )  as other_5'),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 1 THEN 1 ELSE 0 END  ) )  as new_products_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 3 THEN 1 ELSE 0 END  ) )  as new_services_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_6'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O6 = 7 THEN 1 ELSE 0 END  ) )  as other_6'),

            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 1 THEN 1 ELSE 0 END  ) )  as new_products_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 2 THEN 1 ELSE 0 END  ) )  as improved_products_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 3 THEN 1 ELSE 0 END  ) )  as new_services_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 4 THEN 1 ELSE 0 END  ) )  as improved_services_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 5 THEN 1 ELSE 0 END  ) )  as new_processes_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 6 THEN 1 ELSE 0 END  ) )  as improved_processes_7'),
            DB::raw(' sum( ( CASE WHEN achieved.Q22_O7 = 7 THEN 1 ELSE 0 END  ) )  as other_7'),


            DB::raw(' AVG( achieved.TotalQ40  ) as avg_people'),


            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 1 THEN 1 ELSE 0 END  ) )  as Individuals'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 2 THEN 1 ELSE 0 END  ) )  as Small_businesses'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 3 THEN 1 ELSE 0 END  ) )  as Medium_businesses'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 4 THEN 1 ELSE 0 END  ) )  as Large_businesses'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 5 THEN 1 ELSE 0 END  ) )  as Public_institutions'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 6 THEN 1 ELSE 0 END  ) )  as Other_Indi'),
            DB::raw(' sum( ( CASE WHEN achieved.Q13 = 7 THEN 1 ELSE 0 END  ) )  as spontaneous'),
        )
         ;

        $data = $dbQuery->get();
        $newdata = [];

        foreach ($data as $datum){
            $newdata['sars']=
                  $datum->sars_1
                +$datum->sars_2
                  +$datum->sars_3
                  +$datum->sars_4;

            $newdata['locally']=
                  $datum->local_1
                +$datum->local_2
                  +$datum->local_3
                  +$datum->local_4;

            $newdata['business']=
                  $datum->business_1
                +$datum->business_2
                  +$datum->business_3
                  +$datum->business_4;

            $newdata['other_business']=
                  $datum->other_business_1
                +$datum->other_business_2
                  +$datum->other_business_3
                  +$datum->other_business_4;

            $newdata['new_products'] =
                  $datum->new_products_1
                + $datum->new_products_2
                + $datum->new_products_3
                + $datum->new_products_4
                + $datum->new_products_5
                + $datum->new_products_6
                + $datum->new_products_7;

            $newdata['improved_products'] =
                  $datum->improved_products_1
                + $datum->improved_products_2
                + $datum->improved_products_3
                + $datum->improved_products_4
                + $datum->improved_products_5
                + $datum->improved_products_6
                + $datum->improved_products_7;

            $newdata['new_services'] =
                  $datum->new_services_1
                + $datum->new_services_2
                + $datum->new_services_3
                + $datum->new_services_4
                + $datum->new_services_5
                + $datum->new_services_6
                + $datum->new_services_7;

            $newdata['improved_services'] =
                  $datum->improved_services_1
                + $datum->improved_services_2
                + $datum->improved_services_3
                + $datum->improved_services_4
                + $datum->improved_services_5
                + $datum->improved_services_6
                + $datum->improved_services_7;

            $newdata['new_processes'] =
                  $datum->new_processes_1
                + $datum->new_processes_2
                + $datum->new_processes_3
                + $datum->new_processes_4
                + $datum->new_processes_5
                + $datum->new_processes_6
                + $datum->new_processes_7;

            $newdata['improved_processes'] =
                  $datum->improved_processes_1
                + $datum->improved_processes_2
                + $datum->improved_processes_3
                + $datum->improved_processes_4
                + $datum->improved_processes_5
                + $datum->improved_processes_6
                + $datum->improved_processes_7;

            $newdata['other'] =
                  $datum->other_1
                + $datum->other_2
                + $datum->other_3
                + $datum->other_4
                + $datum->other_5
                + $datum->other_6
                + $datum->other_7;

        }

         return Inertia::render('Profile/Profile', [
            'page' => 'profile',
            'chartData' => $data,
            'newdata' => $newdata,
            'gps' => $gps,


        ]);


    }
}
