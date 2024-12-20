<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Review;
use Illuminate\Support\Facades\DB;

class ReviewsRepository
{
    public function __construct(
        private Review $model
    ) {
    }

    public function create(array $data): Review
    {
        return $this->model->create($data);
    }

    public function profileStars(int $profile_id): array
    {
        $stars = current(DB::select('
        SELECT COALESCE(COUNT(*) FILTER (WHERE r.stars = 5), 0) AS count_5_stars,
               COALESCE(COUNT(*) FILTER (WHERE r.stars = 4), 0) AS count_4_stars,
               COALESCE(COUNT(*) FILTER (WHERE r.stars = 3), 0) AS count_3_stars,
               COALESCE(COUNT(*) FILTER (WHERE r.stars = 2), 0) AS count_2_stars,
               COALESCE(COUNT(*) FILTER (WHERE r.stars = 1), 0) AS count_1_stars,
               round(COALESCE(AVG(r.stars), 0), 1) AS average_stars
          FROM user_profile p
     LEFT JOIN reviews r
            ON p.id = r.profile_id
         WHERE p.id = ?
        ', [$profile_id]));

        $stars->average_stars = floatval($stars->average_stars);

        return (array) $stars;
    }

    public function profileReviews($profile_id): array
    {
        return DB::table('reviews')
            ->where('profile_id', $profile_id)
            ->get()
            ->all();
    }
}
