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
            $skill = $this->service->create($validated);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $skill,
            ], 201);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     tags={"Profile skill"},
     *     path="/profile/{profile_id}/skills/{skill_id}",
     *     description="Obtém uma habilidade do perfil",
     *     tags={"ProfileSkills"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         description="Id da habilidade",
     *         in="path",
     *         name="skill_id",
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
    public function show(int $profile_id, int $skill_id)
    {
        try {
            $skill = $this->service->getProfileSkill($profile_id, $skill_id);

            if (empty($skill)) {
                return response([
                    'message' => self::MESSAGE_NOT_FOUND,
                ], 404);
            }

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $skill,
            ], 201);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }


    /**
     * @OA\Patch(
     *     tags={"Profile skill"},
     *     path="/profile/{profile_id}/skills/{skill_id}",
     *     description="Edita uma habilidade do perfil",
     *     tags={"ProfileSkills"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         description="Id da habilidade",
     *         in="path",
     *         name="skill_id",
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
    public function update(int $profile_id, int $skill_id, Request $request)
    {
        $validated = $request->validate([
            'skill' => 'required',
        ]);

        try {
            $skill = $this->service->update($profile_id, $skill_id, $validated);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $skill,
            ], 200);
        } catch (Throwable $th) {
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }
}
