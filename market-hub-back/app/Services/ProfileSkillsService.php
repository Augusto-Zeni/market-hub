<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\ProfileSkills;
use App\Repositories\ProfileSkillsRepository;

class ProfileSkillsService
{
    public function __construct(
        private ProfileSkillsRepository $repository
    )
    {
        
    }

    public function create(array $data): ProfileSkills
    {
        return $this->repository->create($data);
    }
}
