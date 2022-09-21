<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArchievedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('achieved', function (Blueprint $table) {
            $table->id();
            $table->string('SbjNum');
            $table->string('Latitude');
            $table->string('Longitude');
            for ($i = 1; $i <=24 ;$i++){
                $table->string('Q_H_O'.$i)->default(-1);
            }
            $table->string('Q13')->nullable();
            for ($i = 1; $i <=7 ;$i++){
                $table->string('Q22_O'.$i)->default(-1);
            }
            for ($i = 1; $i <=4 ;$i++){
                $table->string('T_Q40a_'.$i)->default(-1);
            }
            $table->string('Q64')->nullable();

            for ($i = 1; $i <=4 ;$i++){
                $table->string('Q64a_O'.$i)->default(-1);
            }

            $table->string('S_Q64a_4')->nullable();
            $table->string('GPS_LA')->nullable();
            $table->string('GPS_LO')->nullable();
            $table->string('TotalQ40')->nullable();
            $table->string('FirmSize')->nullable();
            $table->string('Sector')->nullable();
            $table->string('SampleType')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('achieved');
    }
}
