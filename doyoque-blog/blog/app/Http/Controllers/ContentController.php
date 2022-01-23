<?php

namespace App\Http\Controllers;

use Illuminate\{
    Support\Str,
    Http\Response,
};

use App\{
    Http\Requests\ContentRequest,
    Models\Content,
};

class ContentController extends Controller
{
    /**
     * @var integer $status
     */
    public $status = Response::HTTP_OK;

    /**
     * Store content.
     *
     * @param App\Http\Requests\ContentRequest $request
     * @return json
     */
    public function store(ContentRequest $request)
    {
        $postData = $request->validated();

        $content = new Content;
        $content->title = $postData['title'];
        $content->content = $postData['content'];
        $content->user()->associate($request->user());

        if ($content->save()) {
            return response([
                'id' => Str::uuid(),
                'message' => 'Content has been create',
            ], Response::HTTP_CREATED);
        }
    }
}
