<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Services\ServicesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Throwable;

class ServicesController extends Controller
{
    public function __construct(
        private ServicesService $service
    ) {
    }

    /**
     * @OA\Post(
     *     tags={"Services"},
     *     path="/services",
     *     description="Cria um anúncio de serviço",
     *     tags={"Services"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"user_id", "description", "price_per_hour", "average_time_duration"},
     *             @OA\Property(property="user_id", type="int", example="1"),
     *             @OA\Property(property="description", type="string", example="Conserto de encanamentos"),
     *             @OA\Property(property="price_per_hour", type="int", example="10"),
     *             @OA\Property(property="average_time_duration", type="int", example="1"),
     *         )
     *     ),
     *     @OA\Response(
     *         response="201",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/Service")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|integer',
            'description' => 'required|string',
            'price_per_hour' => 'required|integer',
            'average_time_duration' => 'required|integer',
        ]);

        try {
            $service = $this->service->create($validated);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ], 201);
        } catch (Throwable $th) {
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }

    /**
     * @OA\Get(
     *     tags={"Services"},
     *     path="/services/{service_id}",
     *     description="Obtém um anúncio de serviço",
     *     tags={"Services"},
     *     @OA\Parameter(
     *         description="Id do serviço",
     *         in="path",
     *         name="service_id",
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
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/Service"))
     *             }
     *         )
     *     )
     * )
     */
    public function show(int $service_id)
    {
        try {
            $service = $this->service->get($service_id);

            if (empty($service)) {
                return response([
                    'message' => self::MESSAGE_NOT_FOUND,
                ], 404);
            }

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ]);
        } catch (Throwable $th) {
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }


    /**
     * @OA\Get(
     *     tags={"Services"},
     *     path="/user/{user_id}/services",
     *     description="Obtém serviços de um usuário",
     *     tags={"Services"},
     *     @OA\Parameter(
     *         description="Id do usuário",
     *         in="path",
     *         name="user_id",
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
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", type="array", @OA\Items(ref="#/components/schemas/Service"))
     *             }
     *         )
     *     )
     * )
     */
    public function index(int $user_id)
    {
        try {
            $services = $this->service->servicesByUser($user_id);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $services,
            ]);
        } catch (Throwable $th) {
            Log::error($th->getMessage());
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }

    /**
     * @OA\Patch(
     *     tags={"Services"},
     *     path="/services/{service_id}",
     *     description="Edita em serviço",
     *     tags={"Services"},
     *     @OA\Parameter(
     *         description="Id do serviço",
     *         in="path",
     *         name="service_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="description", type="string", example="Conserto de encanamentos"),
     *             @OA\Property(property="price_per_hour", type="int", example="10"),
     *             @OA\Property(property="average_time_duration", type="int", example="1"),
     *         )
     *     ),
     *     @OA\Response(
     *         response="200",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *                 @OA\Property(property="data", ref="#/components/schemas/Service")
     *             }
     *
     *         )
     *     )
     * )
     */
    public function update(int $service_id, Request $request)
    {
        $validated = $request->validate([
            'description' => 'sometimes|string',
            'price_per_hour' => 'sometimes|integer',
            'average_time_duration' => 'sometimes|integer',
        ]);

        try {
            $service = $this->service->update($service_id, $validated);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ]);
        } catch (Throwable $th) {
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }

    /**
     * @OA\Delete(
     *     tags={"Services"},
     *     path="/services/{service_id}",
     *     description="deleta uma serviço",
     *     tags={"Services"},
     *     @OA\Parameter(
     *         description="Id do serviço",
     *         in="path",
     *         name="service_id",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response="204",
     *         description="successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             properties={
     *                 @OA\Property(property="message", type="string", example="Habilidade criada com sucesso"),
     *             }
     *
     *         )
     *     )
     * )
     */
    public function delete(int $service_id)
    {
        try {
            $service = $this->service->delete($service_id);

            return response([
                'message' => self::MESSAGE_SUCCESS,
                'data' => $service,
            ], 204);
        } catch (Throwable $th) {
            return response([
                'message' => self::MESSAGE_SERVER_ERROR,
            ], 500);
        }
    }
}
