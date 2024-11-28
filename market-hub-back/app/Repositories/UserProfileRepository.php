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

    public function create(array $data, int $user_id): UserProfile
    {
        $data['user_id'] = $user_id;
        return $this->model->create($data);
    }

    public function update(array $data, int $user_id): UserProfile
    {
        $userProfile = $this->model
            ->where('user_id', '=', $user_id)
            ->firstOrFail();
        $userProfile->fill($data);
        $userProfile->save();
        return $userProfile;
    }

    public function getByUserId(int $user_id): UserProfile
    {
        return $this->model
        ->where('user_id', '=', $user_id)
        ->firstOrFail();
    }
}
