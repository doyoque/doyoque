<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->text('content');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('contents', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->comment('belongs to users.id')->nullable()->after('content');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('SET NULL');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('contents', function (Blueprint $table) {
            $table->dropForeign('contents_user_id_foreign');
            $table->dropColumn(['user_id']);
        });

        Schema::dropIfExists('contents');
    }
}
