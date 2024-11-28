<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\UserProfile;

class UserProfileRepository
{
    public function __construct(
        private UserProfile $model
    ) {
    }

    public function create(array $data): UserProfile
    {
        return $this->model->create($data);
    }

    public function update(array $data, int $profile_id): UserProfile
    {
        $userProfile = $this->model->findOrFail($profile_id);
        $userProfile->fill($data);
        $userProfile->save();
        return $userProfile;
    }

    public function find(int $profile_id): UserProfile
    {
        return $this->model->findOrFail($profile_id);
    }
}
