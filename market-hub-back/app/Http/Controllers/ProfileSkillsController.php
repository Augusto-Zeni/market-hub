<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\ProfileSkillsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Throwable;

class ProfileSkillsController extends Controller
{
    public function __construct(
        private ProfileSkillsService $service
    ) {
    }

    /**
     * @OA\Post(
     *     tags={"Profile skill"},
     *     path="/profile/{profile_id}/skills",
     *     description="Cria uma habilidade do perfil",
     *     tags={"ProfileSkills"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"skill"},
     *             @OA\Property(property="skill", type="string", example="Encanador"),
     *         )
     *     ),
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response="201",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/ProfileSkill")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function create(int $profile_id, Request $request)
    {
        $validated = $request->validate([
            'skill' => 'required',
        ]);

        try {
            $validated['profile_id'] = $profile_id;
            $userProfile = $this->service->create($validated);

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
}
