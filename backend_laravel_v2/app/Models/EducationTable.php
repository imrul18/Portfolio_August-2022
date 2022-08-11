<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationTable extends Model
{
    use HasFactory;

    protected $fillable = [
        'school',
        'degree',
        'graduated',
        'description',
    ];
}
