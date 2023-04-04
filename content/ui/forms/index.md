# Forms

### Types
```html
<form-input-text />
<form-input-number />
<form-input-password />
<form-textarea />
<form-radio />
<form-check />
<form-switch />
<form-range />
<form-label />     
 ```

### Sizes
```html
 sm, md, lg
 ```

#### Input Text
```vue
<form-input-text 
    label="Input Text"  
    v-model="inputValue" 
    size="lg" 
    @update:modelValue="updateInputValue"
></form-input-text >
 ```
#### Form Textarea
```vue
<form-textarea 
    class="mg-b-15"  
    v-model="inputValue" 
    label="Textarea" 
    placeholder="Enter your value" 
    @update:modelValue="updateInputValue"
></form-textarea>
 ```
expand the textarea depend on the content
```vue
adjust-to-text
 ```

#### Input Password
```vue
<form-input-password 
    label="Input Passowrd"  
    v-model="inputValue" 
    size="lg" 
    @update:modelValue="updateInputValue"
></form-input-password >
 ```

#### Input Number
```vue
<form-input-number 
    label="Input Number" 
    v-model="rangeValue"  
    @update:modelValue="updateInputValue"
></form-input-number>
 ```

#### Input Check
```vue
<form-check 
    label="CheckBox" 
    v-model="formSwitch"  
    @update:modelValue="updateInputValue"
></form-check>
 ```
```ts
const formSwitch = ref(false);
 ```


#### Input Radio
```vue
<form-radio 
    :options="inputOptions"  
    @update:modelValue="updateInputValue"
></form-radio>
 ```

```ts
const inputOptions = reactive(['Option 1', 'Option 2', 'Option 3']);
 ```

```ts
orient= "vertical || horizontal"
 ```

#### Input Switch
```vue
<form-switch 
    switch-color="primary" 
    label="Toggle Swich" 
    v-model="formSwitch" 
    @update:modelValue="updateInputValue"
></form-switch>
 ```
```ts
const formSwitch = ref(false);
 ```
#### Form Range 
```vue
<form-range 
    class="mg-b-15" 
    range-percentage 
    range-color="primary" 
    v-model="rangeValue" 
    @update:modelValue="updateInputValue"
></form-range >
 ```
```vue
range-percentage range-color="primary"
 ```

                


### Samples

