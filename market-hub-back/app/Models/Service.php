<?php

declare(strict_types=1);

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Service",
 *     title="Service",
 * 	   @OA\Property(
 *         property="id",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="user_id",
 *         type="int"
 *     ),
 *     @OA\Property(
 *         property="description",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="price_per_hour",
 *         type="int"
 *     ),
 *     @OA\Property(
 *         property="average_time_duration",
 *         type="int"
 *     ),
 *     @OA\Property(
 *         property="image_url",
 *         type="string"
 *     ),
 * )
 */
class Service extends Model
{
    protected $table = 'services';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'user_id',
        'description',
        'price_per_hour',
        'average_time_duration',
        'image_url',
    ];
}
