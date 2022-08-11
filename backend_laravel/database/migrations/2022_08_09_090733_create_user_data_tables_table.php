<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_data_tables', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('profilepic');
            $table->string('phone');
            $table->string('email');
            $table->string('github');
            $table->string('street');
            $table->string('city');
            $table->string('state');
            $table->string('zip');
            $table->text('description');
            $table->text('bio');
            $table->string('resumeDownload');
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
        Schema::dropIfExists('user_data_tables');
    }
};
