<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Service;
use App\Repositories\ServicesRepository;
use Illuminate\Database\Eloquent\Collection;

class ServicesService
{
    public function __construct(
        private ServicesRepository $repository
    ) {
    }

    public function servicesByUser(int $user_id): Collection
    {
        return $this->repository->servicesByUser($user_id);
    }

    public function create(array $data): Service
    {
        return $this->repository->create($data);
    }

    public function get(int $service_id): ?Service
    {
        return $this->repository->get($service_id);
    }

    public function update(int $service_id, array $data): Service
    {
        return $this->repository->update($service_id, $data);
    }

    public function delete(int $service_id): void
    {
        $this->repository->delete($service_id);
    }
}
