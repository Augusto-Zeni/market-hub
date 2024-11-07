<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use OpenApi\Generator;

/**
 * @OA\Info(
 *     title="MarketHub API Documentation",
 *     version="0.1",
 *      @OA\Contact(
 *          email="info@yeagger.com"
 *      ),
 * ),
 *  @OA\Server(
 *      description="Localhost",
 *      url="http://127.0.0.1:8989/api/"
 *  ),
 */
class DocumentationController extends Controller
{
    public function json()
    {
        $docs = Generator::scan([app_path('Http/Controllers')]);

        return response($docs->toJson());
    }
}
