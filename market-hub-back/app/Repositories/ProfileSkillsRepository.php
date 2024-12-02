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

    public function getProfileSkill(int $profile_id, int $skill_id): ?ProfileSkills
    {
        return $this->model->where('profile_id', $profile_id)
            ->where('id', $skill_id)
            ->first();
    }

    public function update(int $profile_id, int $skill_id, array $data): ProfileSkills
    {
        $skill = $this->model->where('profile_id', $profile_id)
            ->where('id', $skill_id)
            ->firstOrFail();

        $skill->fill($data);
        $skill->save();

        return $skill;
    }
}
