<?php

declare(strict_types=1);

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Review",
 *     title="Review",
 * 	   @OA\Property(
 *         property="id",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="profile_id",
 *         type="int"
 *     ),
 *     @OA\Property(
 *         property="user_id",
 *         type="int"
 *     ),
 *   	   @OA\Property(
 *         property="review",
 *         type="string"
 *     ),
 *  	   @OA\Property(
 *         property="stars",
 *         type="int"
 *     ),
 * ),
 * @OA\Schema(
 *     schema="Stars",
 *     title="Stars",
 * 	   @OA\Property(
 *         property="count_1_stars",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="count_2_stars",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="count_3_stars",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="count_4_stars",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="count_5_stars",
 *         type="int"
 *     ),
 * )
 */

class Review extends Model
{
    protected $table = 'reviews';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'profile_id',
        'user_id',
        'review',
        'stars',
    ];
}
