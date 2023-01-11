<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public function items()
    {
        return $this->hasMany(ItemOrder::class);
    }

    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock'
    ];
}
