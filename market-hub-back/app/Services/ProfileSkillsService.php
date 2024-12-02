<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\ProfileSkills;
use App\Repositories\ProfileSkillsRepository;
use Illuminate\Database\Eloquent\Collection;

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

    public function getProfileSkill(int $profile_id, int $skill_id): ?ProfileSkills
    {
        return $this->repository->getProfileSkill($profile_id, $skill_id);
    }

    public function getProfileSkills(int $profile_id): Collection
    {
        return $this->repository->getProfileSkills($profile_id);
    }

    public function update(int $profile_id, int $skill_id, array $data): ?ProfileSkills
    {
        return $this->repository->update($profile_id, $skill_id, $data);
    }

    public function delete(int $profile_id, int $skill_id): void
    {
        $this->repository->delete($profile_id, $skill_id);
    }
}
