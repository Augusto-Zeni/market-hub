<?php

declare(strict_types=1);

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="ProfileSkill",
 *     title="Profile skill",
 * 	   @OA\Property(
 *         property="id",
 *         type="int"
 *     ),
 * 	   @OA\Property(
 *         property="profile_id",
 *         type="int"
 *     ),
 *     @OA\Property(
 *         property="skill",
 *         type="string"
 *     )
 * )
 */
class ProfileSkills extends Model
{
    protected $table = 'profile_skills';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'profile_id',
        'skill',
    ];
}
