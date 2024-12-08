<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Service;
use Illuminate\Database\Eloquent\Collection;

class ServicesRepository
{
    public function __construct(
        private Service $model
    ) {
    }

    public function servicesByUser(int $user_id): Collection
    {
        return $this->model->where('user_id', $user_id)
            ->get();
    }

    public function create(array $data): Service
    {
        return $this->model->create($data);
    }

    public function get(int $service_id): ?Service
    {
        return $this->model->find($service_id);
    }

    public function update(int $service_id, array $data): Service
    {
        $service = $this->model->findOrFail($service_id);
        $service->fill($data);
        $service->save();
        return $service;
    }

    public function delete(int $service_id): void
    {
        $this->model->destroy($service_id);
    }
}
