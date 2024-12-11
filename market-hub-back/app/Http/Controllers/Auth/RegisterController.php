<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Auth\RegisterService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

/**
 * @schema(
 *  schema="register-response"
 *  type="object"
 * )
 */
class RegisterController extends Controller
{
    public function __construct(
        private RegisterService $service
    ) {
    }

    /**
     * @OA\Post(
     *     path="/register",
     *     summary="Registro de usuário",
     *     tags={"Auth"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"name", "email", "password", "user_type"},
     *             @OA\Property(property="name", type="string", example="João Silva"),
     *             @OA\Property(property="email", type="string", example="joao@example.com"),
     *             @OA\Property(property="cellphone", type="string", example="51123451234"),
     *             @OA\Property(property="city", type="string", example="Lajeado"),
     *             @OA\Property(property="state", type="string", example="RS"),
     *             @OA\Property(property="about", type="string", example="teste teste teste teste teste"),
     *             @OA\Property(property="password", type="string", example="senhaSegura123"),
     *             @OA\Property(property="user_type", type="string", example="CONSUMER")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Usuário registrado com sucesso",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Registro realizado com sucesso"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Erro de validação"
     *     )
     * )
     */
    public function register(Request $request): JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'cellphone' => 'required',
            'city' => 'required',
            'state' => 'required',
            'about' => 'required',
            'password' => 'required',
            'user_type' => 'required',
        ]);

        try {
            $user = $this->service->register(
                $request->only(['name', 'email', 'cellphone', 'city', 'state', 'about', 'password', 'user_type'])
            );

            $token = $user->createToken(
                name: 'access_token',
                expiresAt: Carbon::now()->addHour(1)
            )->plainTextToken;

            return response()->json([
                'message' => 'User registered!',
                'data' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'cellphone' => $user->cellphone,
                    'city' => $user->city,
                    'state' => $user->state,
                    'about' => $user->about,
                    'user_type' => $user->user_type,
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                ]], 201);
        } catch (Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 500);
        }
    }
}
