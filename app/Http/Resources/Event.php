<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Event extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'date' => $this->date,
            'time' => $this->time,
            'city' => $this->city,
            'color' => $this->color,
            'programm' => $this->programm,
            'href_event' => $this->href_event,
            'seo_title' => $this->seo_title,
        ];
    }
}
