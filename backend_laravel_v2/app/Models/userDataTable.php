<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class userDataTable extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'profilepic',
        'phone',
        'email',
        'github',
        'street',
        'city',
        'state',
        'zip',
        'description',
        'bio',
        'resumeDownload'
    ];
}
