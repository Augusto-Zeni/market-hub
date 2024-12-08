<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\ReviewsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Throwable;

class ReviewsController extends Controller
{
    public function __construct(
        private ReviewsService $service
    ) {
    }

     /**
     * @OA\Post(
     *     tags={"Reviews"},
     *     path="/reviews",
     *     description="Cria uma avaliação no perfil do prestador",
     *     tags={"Reviews"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"profile_id", "reviews", "stars"},
     *             @OA\Property(property="profile_id", type="int", example="1"),
     *             @OA\Property(property="reviews", type="string", example="Encanador do bom"),
     *             @OA\Property(property="stars", type="int", example="5"),
     *         )
     *     ),
     *     @OA\Response(
     *         response="201",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/Review")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'profile_id' => 'required|integer',
            'review' => 'required',
            'stars' => 'required|integer',
        ]);

        try {

            $validated['user_id'] = Auth::user()->id;

            $service = $this->service->create($validated);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ]);
        } catch (Throwable $th) {
            Log::error($th->getMessage());
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }


     /**
     * @OA\Get(
     *     tags={"Reviews"},
     *     path="/reviews/profile-stars/{profile_id}",
     *     description="Obtém estrelas do perfil do prestador",
     *     tags={"Reviews"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="int"
     *         )
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/Stars")
     *             }
     *         )
     *     )
     * )
     */
    public function profileStars(int $profile_id)
    {
        try {
            $service = $this->service->profileStars($profile_id);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ]);
        } catch (Throwable $th) {
            Log::error($th->getMessage());
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }


    /**
     * @OA\Get(
     *     tags={"Reviews"},
     *     path="/reviews/profile-reviews/{profile_id}",
     *     description="Obtém reviews no perfil do prestador",
     *     tags={"Reviews"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="int"
     *         )
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/Review"))
     *             }
     *
     *         )
     *     )
     * )
     */
    public function profileReviews(int $profile_id)
    {
        try {
            $service = $this->service->profileReviews($profile_id);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ]);
        } catch (Throwable $th) {
            Log::error($th->getMessage());
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }
}
