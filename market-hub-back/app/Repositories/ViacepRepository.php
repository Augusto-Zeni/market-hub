<?php

declare(strict_types=1);

namespace App\Repositories;

use Illuminate\Support\Facades\Http;

use function data_get;

class ViacepRepository
{
    public function __construct(
    ) {
    }

    public function getLocation(string $zipcode): ?string
    {
        $cep = Http::get(sprintf('https://viacep.com.br/ws/%s/json/', $zipcode));

        $city = data_get($cep, 'localidade');
        $uf = data_get($cep, 'uf');

        if (empty($city) || empty($uf)) {
            return null;
        }

        return sprintf('%s - %s', $city, $uf);
    }
}
