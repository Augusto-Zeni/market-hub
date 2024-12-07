<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\UserProfile;
use App\Repositories\UserProfileRepository;
use App\Repositories\ViacepRepository;
use Exception;

class UserProfileService
{
    public function __construct(
        private UserProfileRepository $repository,
        private ViacepRepository $viacep
    ) {
    }

    public function createUserProfile(array $data): UserProfile
    {
        $location = $this->viacep->getLocation($data['zipcode']);

        if (empty($location)) {
            throw new Exception('asodkjsaodsad');
        }

        $data['location'] = $location;

        return $this->repository->create($data);
    }

    public function updateUserProfile(array $data, int $profile_id): UserProfile
    {
        $location = $this->viacep->getLocation($data['zipcode']);

        if (empty($location)) {
            throw new Exception('asodkjsaodsad');
        }

        $data['location'] = $location;

        return $this->repository->update($data, $profile_id);
    }

    public function getProfileByUserId(int $profile_id): UserProfile
    {
        return $this->repository->find($profile_id);
    }
}
