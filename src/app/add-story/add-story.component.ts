import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../category/category.service";
import {AddPictureService} from "./add-picture/add-picture.service";
import {AddStoryService} from "./add-story.service";
import {AddStory} from "./add-story";
import {ProfileService} from "../profile/profile.service";
import { Subject} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit, OnDestroy{
  addStoryForm!: FormGroup
  categories!: any
  sub$ = new Subject()
  createrUrl!: any
  message!: string
  showMessage = false

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private addPictureService: AddPictureService,
    private addStoryService: AddStoryService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit() {
    this.addStoryForm = this.formBuilder.group({
      name: [
        '',
        [Validators.required]
      ],
      description: [
        '',
        [Validators.required]
      ],
      text: [
        '',
        [Validators.required]
      ],
      picture: [
        ''
      ],
      fileSource: [
        '',
        [Validators.required]
      ],
      category: [
        '',
        [Validators.required]
      ],
    })

    this.categoryService.getCategories().subscribe((res: any)=>{
      this.categories = res['hydra:member']
      console.log(this.categories)
    })

    this.profileService.getPerson(this.authService.getUserInfo().id)
      .subscribe((res: any) => {
        this.createrUrl = res['hydra:member'][0]['@id']

      })
  }

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addStoryForm.patchValue({
        fileSource: file
      });
    }
  }

  addStoryProcess() {
    const formData = new FormData();
    formData.append('file', this.addStoryForm.get('fileSource')?.value);

    this.addPictureService.addPicture(formData).subscribe(
      (res: any)=>{

        console.log(res)
        const story: AddStory = {
          name: this.addStoryForm.value.name,
          description: this.addStoryForm.value.description,
          text: this.addStoryForm.value.text,
          picture: this.addStoryForm.value.picture = res['@id'],
          category: this.addStoryForm.value.category,
          creater: this.createrUrl
        }
        console.log(story)
        this.addStoryService.addStory(story).subscribe(
          res=>{
            this.showMessage = true
            this.message = "Sizning hikoyangiz ma'lumotlar omboriga qo'shildi!"
            setTimeout(() => {
              this.showMessage = false
              window.location.reload()
            }, 3000)
          },
          err=> {
            this.showMessage = true
            this.message = "Hikoyani qo'shishda xatolik bor, iltimos qayta tekshirib ko'ring!"
            setTimeout(() => {
              this.showMessage = false
            }, 4000)
          }
          )

      },
    )

  }

  ngOnDestroy() {
    this.sub$.next(null)
    this.sub$.complete()
  }
}
