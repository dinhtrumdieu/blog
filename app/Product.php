<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

     protected $table = 'products';
     protected $fillable = [
        	'name', 'email', 'phone', 'message'
        ]
        public function post(){
                return $this->belongsTo('App\posts');
            }
}
