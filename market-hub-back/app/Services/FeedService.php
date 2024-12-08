<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Service;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;

class FeedService
{
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

        $result = $query->paginate(
            perPage: $per_page,
            page: $page
        );

       $result = $result->toArray();
    }
}
