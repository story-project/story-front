import { ResolveFn } from '@angular/router';
import {StoryService} from "../story.service";
import {inject} from "@angular/core";
import {map, Observable} from "rxjs";

export const storyResolver: ResolveFn<Observable<Object>> = (
  route,
  state,
  storyService: StoryService = inject(StoryService)
) => {

  const id = route.params['id']

  return storyService.getStory(id).pipe(map(res=>{
    return res
  }));
};
