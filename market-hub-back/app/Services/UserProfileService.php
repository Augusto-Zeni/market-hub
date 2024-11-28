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

    public function createUserProfile(array $data): UserProfile
    {
        return $this->repository->create($data);
    }

    public function updateUserProfile(array $data, int $profile_id): UserProfile
    {
        return $this->repository->update($data, $profile_id);
    }

    public function getProfileByUserId(int $profile_id): UserProfile
    {
        return $this->repository->find($profile_id);
    }
}
