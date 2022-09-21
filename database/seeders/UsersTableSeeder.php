<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;
use function bcrypt;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        DB::table('users')->delete();

        DB::table('users')->insert(array(
            0 =>
                array(
                    'id' => 1,
                    'username' => 'developer',
                     'password' => bcrypt('12345_@Password'),

                    'created_at' => '2021-09-27 08:48:59',
                    'updated_at' => '2021-09-27 08:48:59',
                ),
            1 =>
                array(
                    'id' => 2,
                    'username' => 'itayi',
                     'password' => bcrypt('@Password1'),

                    'created_at' => '2021-09-27 08:48:59',
                    'updated_at' => '2021-09-27 08:48:59',
                ),
            2 =>
                array(
                    'id' => 3,
                    'username' => 'UjUser',
                     'password' => bcrypt('@Password_UJ'),

                    'created_at' => '2021-09-27 08:48:59',
                    'updated_at' => '2021-09-27 08:48:59',
                )
        ));


    }
}
