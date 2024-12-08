<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Review;
use App\Repositories\ReviewsRepository;

class ReviewsService
{
    public function __construct(
        private ReviewsRepository $repository
    ) {
    }

    public function create(array $data): Review
    {
        return $this->repository->create($data);
    }

    public function profileStars(int $profile_id): array
    {
        return $this->repository->profileStars($profile_id);
    }
}
