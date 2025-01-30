<script lang="ts" setup>
import { useToolbar } from '~/src/store/ui/toolbar/toolbar';

const  toolbar = useToolbar();
const items = toolbar.toolbarItems;
</script>
<template>
    <div class="toolbar p-1 flex-place-center w-full  h-10 border-b border-primary-950">
        <UDropdownMenu v-for="(item) in items" :items="item.items" :key="item.name" :ui="{itemTrailingKbds:'ml-5',itemLeadingIcon:'w-4 mr-1'}">
            <UButton class="cursor-pointer" variant="ghost">{{item.name}}</UButton>
        </UDropdownMenu>
        <!-- Action buttons -->
        <UTooltip text="Search Commands" :kbds="['ALT', 'O']">
            <UButton icon="i-lucide-search" class="cursor-pointer ml-auto" variant="ghost" />
        </UTooltip>
        <UTooltip text="Maximaize" :kbds="['ALT', 'M']">
            <UButton icon="i-lucide-fullscreen" class="cursor-pointer" variant="ghost" />
        </UTooltip>
        <USeparator orientation="vertical" />
        <UTooltip text="Save" :kbds="['ALT', 'S']">
            <UButton icon="i-lucide-save" class="cursor-pointer" variant="ghost" />
        </UTooltip>
        <USeparator orientation="vertical" />
        <UTooltip text="Show Keyboard Shortcuts" :kbds="['ALT', 'K']">
            <UButton icon="i-lucide-keyboard" class="cursor-pointer" variant="ghost" />
        </UTooltip>
    </div>
</template>
