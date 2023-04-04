# Modals
 

#### 
```vue
<btn color="primary" @click="modalName = true">Show Modal</btn>
```
#### Basic Modal
```vue
<modal title="test" size="" v-model="modalName">
  modal content
</modal>
```

#### Delete Confirmation Modal

Pass props [record="name"] as a delete record name

```html
<modal v-model="modal1">

    <delete-modal record="Users"></delete-modal>
    
    <div class="d-flex gap-15 justify-content-center">
      <btn color="primary-outline" size="lg" class="pd-x-40" @click="modal1 = false">No</btn>
      <btn color="danger" size="lg" class="pd-x-40" @click="modal1 = false">Yes, Delete</btn>
    </div>

</modal>
```

```ts
const modalName = ref(false);
 ```


### Sizes
```html
 xs, sm, lg, full
 ```
 
### Samples

