<?php

namespace App\Models;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;

class RidesLog extends BaseModel implements JWTSubject, AuthenticatableContract
{

  use Authenticatable;

    protected $fillable = [
        'ride_id',
        'location',
        'place_id',
        'status'
    ];
    protected $guarded = [
        'ride_log_id', 'created_at', 'updated_at', 'deleted_at', 'approved_at'
    ];

    protected $table = 'rides_log';


        public function getJWTIdentifier()
        {
            return $this->getKey();
        }

        public function getJWTCustomClaims()
        {
            return [];
        }

}
