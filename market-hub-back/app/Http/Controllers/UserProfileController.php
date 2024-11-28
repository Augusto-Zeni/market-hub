<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\UserProfileService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Throwable;

class UserProfileController extends Controller
{
    public function __construct(
        private UserProfileService $service
    ) {
    }

    /**
     * @OA\Post(
     *     tags={"User profile"},
     *     path="/profile/{user_id}",
     *     description="Cria perfil do usuário",
     *     tags={"UserProfile"},
     *     @OA\Parameter(
     *         description="Id do usuário",
     *         in="path",
     *         name="user_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"job_role", "zipcode", "about", "phone"},
     *             @OA\Property(property="job_role", type="string", example="Encanador"),
     *             @OA\Property(property="zipcode", type="string", example="99999999"),
     *             @OA\Property(property="about", type="string", example="texto texto texto texto texto"),
     *             @OA\Property(property="phone", type="string", example="51999999999")
     *         )
     *     ),
     *     @OA\Response(
     *         response="201",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Perfil criado com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/UserProfile")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'job_role' => 'required|string',
            'zipcode' => 'required|string',
            'about' => 'required|string',
            'phone' => 'required|string',
        ]);

        try {
            $userProfile = $this->service->createUserProfile(
                $validated,
                (int) $request->route('user_id')
            );

            return response([
                'message' => 'Profile created!',
                'data' => $userProfile,
            ], 201);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }

    /**
     * @OA\Put(
     *     tags={"User profile"},
     *     path="/profile/{user_id}",
     *     description="Edita perfil do usuário",
     *     tags={"UserProfile"},
     *     @OA\Parameter(
     *         description="Id do usuário",
     *         in="path",
     *         name="user_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="job_role", type="string", example="Encanador"),
     *             @OA\Property(property="zipcode", type="string", example="99999999"),
     *             @OA\Property(property="about", type="string", example="texto texto texto texto texto"),
     *             @OA\Property(property="phone", type="string", example="51999999999")
     *         )
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Profile updated!"),
     *                 @OA\Property(property="data", ref="#/components/schemas/UserProfile")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'job_role' => 'sometimes|string',
            'zipcode' => 'sometimes|string',
            'about' => 'sometimes|string',
            'phone' => 'sometimes|string',
        ]);

        try {
            $userProfile = $this->service->updateUserProfile(
                $validated,
                (int) $request->route('user_id')
            );

            return response([
                'message' => 'Profile updated!',
                'data' => $userProfile,
            ], 200);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     tags={"User profile"},
     *     path="/profile/{user_id}",
     *     description="Edita perfil do usuário",
     *     tags={"UserProfile"},
     *     @OA\Parameter(
     *         description="Id do usuário",
     *         in="path",
     *         name="user_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="job_role", type="string", example="Encanador"),
     *             @OA\Property(property="zipcode", type="string", example="99999999"),
     *             @OA\Property(property="about", type="string", example="texto texto texto texto texto"),
     *             @OA\Property(property="phone", type="string", example="51999999999")
     *         )
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Profile retrieved!"),
     *                 @OA\Property(property="data", ref="#/components/schemas/UserProfile")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function show(int $user_id)
    {
        try {
            $userProfile = $this->service->getProfileByUserId($user_id);

            return response([
                'message' => 'Profile retrieved!',
                'data' => $userProfile,
            ], 200);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }
}
