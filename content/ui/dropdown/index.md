# Dropdown
 

#### Normal Dropdown
```vue
<dropdown
    v-model="selected"
    class="form-dropdown lg"
    :toggle-arrow="true"
    placeholder="Dropdown Placeholder"
    :items="links"
></dropdown>
```
#### Multiple Dropdown with search
```vue
<search-dropdown-multi 
    class="form-dropdown lg" 
    :toggle-arrow="true"
    :searchable="true"
    placeholder="Dropdown Placeholder"
    :items="links"
    :items-limit="2"
></search-dropdown-multi>
```



```ts
const selected = ref("");

const links = reactive(
    [
        {name: 'Name', icon: 'ri-map-pin-line'},
    ]
);
 ```

#### Searchable Dropdown
```vue
:searchable="true"
```

#### Loading 
```vue
:loading="true"
```
#### Clearable
```vue
:clearable="true"
```



### Samples

