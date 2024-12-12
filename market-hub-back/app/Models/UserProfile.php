<?php

declare(strict_types=1);

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="UserProfile",
 *     title="User profile",
 * 	   @OA\Property(
 *         property="user_id",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="job_role",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="zipcode",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="location",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="about",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="phone",
 *         type="string"
 *     ),
 *     @OA\Property(
 *         property="image_url",
 *         type="string"
 *     )
 * )
 */
class UserProfile extends Model
{
    protected $table = 'user_profile';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'user_id',
        'job_role',
        'zipcode',
        'location',
        'about',
        'phone',
        'image_url'
    ];
}
