<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enum\CategoryEnum;
use App\Services\FeedService;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Throwable;

class FeedController extends Controller
{
    public function __construct(
        private FeedService $service
    ) {
    }

    /**
     * @OA\Get(
     *     path="/feed",
     *     tags={"Feed"},
     *     summary="Feed",
     *     description="Feed de serviços",
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Número da página (inicia em 1)",
     *         required=false,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Quantidade de itens por página",
     *         required=false,
     *         @OA\Schema(type="integer", example=10)
     *     ),
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Texto para buscar no título ou conteúdo dos posts",
     *         required=false,
     *         @OA\Schema(type="string", example="Laravel")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Lista de posts paginada",
     *         @OA\JsonContent(
     *             @OA\Property(property="current_page", type="integer", example=1),
     *            @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/FeedResponse")),
     *             @OA\Property(property="total", type="integer", example=50),
     *             @OA\Property(property="last_page", type="integer", example=5),
     *             @OA\Property(property="per_page", type="integer", example=10),
     *             @OA\Property(property="next_page_url", type="string", example="http://example.com/api/posts?page=2"),
     *             @OA\Property(property="prev_page_url", type="string", example=null)
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Requisição inválida",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Erro na requisição.")
     *         )
     *     )
     * )
     */
    public function index(Request $request)
    {
        $filters = $request->validate([
            'search' => 'string',
            'page' => 'integer',
            'per_page' => 'integer',
            'category' => [Rule::enum(CategoryEnum::class)],
        ]);

        try {
            $results = $this->service->search($filters);

            return response($results);
        } catch (Throwable $th) {
            dd($th);
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }
}
