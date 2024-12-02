<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\ProfileSkills;

class ProfileSkillsRepository
{
    public function __construct(
        private ProfileSkills $model
    ) {
    }

    public function create(array $data): ProfileSkills
    {
        return $this->model->create($data);
    }
}
