<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\UserProfile;
use App\Repositories\UserProfileRepository;

class UserProfileService
{
    public function __construct(
        private UserProfileRepository $repository
    )
    {
        
    }

    public function createUserProfile(array $data, int $user_id): UserProfile
    {
        return $this->repository->create($data, $user_id);
    }
}