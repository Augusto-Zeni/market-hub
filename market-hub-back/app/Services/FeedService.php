<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Service;

class FeedService
{
    public function __construct(
        private UserProfileService $userProfileService,
        private ReviewsService $reviewsService
    ) {
    }

    public function search(array $filters)
    {
        $query = Service::query();

        $page = 1;
        if (isset($filters['page'])) {
            $page = $filters['page'];
        }

        $per_page = 10;
        if (isset($filters['per_page'])) {
            $per_page = $filters['per_page'];
        }

        if (isset($filters['search'])) {
            $query->where('description', 'ilike', '%' . $filters['search'] . '%');
        }

        if (isset($filters['category'])) {
            $query->where('category', '=', $filters['category']);
        }


        $result = $query->paginate(
            perPage: $per_page,
            page: $page
        );

        $result = $result->toArray();

        foreach ($result['data'] as $key => $item) {
            $profile = $this->userProfileService->getProfileByUserId($item['user_id']);
            $reviews = $this->reviewsService->profileStars($profile->id);

            $result['data'][$key]['profile'] = $profile->toArray();
            $result['data'][$key]['stars'] = $reviews;
        }
        return $result;
    }
}
