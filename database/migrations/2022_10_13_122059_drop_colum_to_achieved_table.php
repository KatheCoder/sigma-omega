<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropColumToAchievedTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('achieved', function (Blueprint $table) {
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('achieved', function (Blueprint $table) {
            $table->dropColumn(['T_Q40a_1', 'T_Q40a_2', 'T_Q40a_3', 'T_Q40a_4']);
        });
    }
}
