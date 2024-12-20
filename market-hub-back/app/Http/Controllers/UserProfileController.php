<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\UserProfile;
use App\Services\UserProfileService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
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
     *     path="/profile",
     *     description="Cria perfil do usuário",
     *     tags={"UserProfile"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id","name", "email", "job_role", "zipcode", "about", "phone"},
     *             @OA\Property(property="user_id", type="int", example="1"),
     *             @OA\Property(property="email", type="string", example="joao@silva.com"),
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
            'user_id' => 'required',
            'name' => 'required|string',
            'email' => 'required|email',
            'job_role' => 'required|string',
            'zipcode' => 'required|string',
            'about' => 'required|string',
            'phone' => 'required|string',
        ]);

        try {
            $userProfile = $this->service->createUserProfile($validated);

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
     * @OA\Patch(
     *     tags={"User profile"},
     *     path="/profile/{profile_id}",
     *     description="Edita perfil do usuário",
     *     tags={"UserProfile"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="job_role", type="string", example="Encanador"),
     *             @OA\Property(property="name", type="string", example="João"),
     *             @OA\Property(property="email", type="string", example="joao@example.com"),
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
    public function update(int $profile_id, Request $request)
    {
        $validated = $request->validate([
            'job_role' => 'sometimes|string',
            'zipcode' => 'sometimes|string',
            'about' => 'sometimes|string',
            'phone' => 'sometimes|string',
            'email' => 'sometimes|string',
        ]);

        try {
            $userProfile = $this->service->updateUserProfile(
                $validated,
                $profile_id
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
     *     path="/profile/{profile_id}",
     *     description="Obtém perfil do usuário",
     *     tags={"UserProfile"},
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
            $userProfile = $this->service->getProfile($user_id);

            return response([
                'message' => 'Profile retrieved!',
                'data' => $userProfile,
            ], 200);
        } catch (Throwable $th) {
            var_dump($user_id);
            var_dump($th->getMessage());
            Log::error($th->getMessage(), []);

            return response([
                'message' => 'Server error!',
            ], 500);
        }
    }


     /**
     * @OA\Post(
     *     tags={"UserProfile"},
     *     path="/services/{profile_id}/upload-image",
     *     description="upload de imagem do perfil",
     *     tags={"UserProfile"},
     *     @OA\Parameter(
     *         description="Id do perfil",
     *         in="path",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(
     *                     description="file",
     *                     property="image",
     *                     type="string",
     *                     format="file",
     *                 ),
     *                 required={"image"}
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response="201",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/UserProfile")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function uploadImage(int $profile_id, Request $request)
    {
        try {
            $imagem = $request->file('image');

            $file = $imagem->store();

            $service = UserProfile::findOrFail($profile_id);
            $service->image_url = Storage::url($file);
            $service->save();

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ], 200);
        } catch (Throwable $th) {
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }
}
