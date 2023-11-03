<script lang="ts">
    import { modalStore } from "@skeletonlabs/skeleton";
    import type { SvelteComponent } from "svelte";
    import type { Task } from "$lib/utils/interface";
    import Button from "../Button.svelte";
    import Checkbox from "../Checkbox.svelte";
    import SupportButton from "../SupportButton.svelte";

    export let parent: SvelteComponent;

    let category = $modalStore[0].meta.category;
    let taskName = "";
    let newTask: Task = {
        type: "number",
        max: 0
    };

    function onFormSubmit() {
        let newCustom = {
            ...JSON.parse(localStorage.getItem(`c_${category}`) || "{}"),
            [taskName]: newTask
        };
        localStorage.setItem(`c_${category}`, JSON.stringify(newCustom));

        if ($modalStore[0].response) $modalStore[0].response(newCustom);
        modalStore.close();
    }

    $: {
        if (newTask.type == "booleanList" || newTask.type == "boolean") {
            delProp("max");
        }

        if (
            newTask.type == "number" ||
            newTask.type == "numberWithButtons" ||
            newTask.type == "boolean"
        ) {
            delProp("label");
        }

        if (newTask.type != "numberWithButtons") {
            delProp("buttons");
        }
    }

    function delProp(p: string) {
        // @ts-ignore
        delete newTask[p];
    }

    function onListInput(
        e: InputEvent | (Event & { currentTarget: EventTarget & HTMLInputElement }),
        t: "numberWithButtons" | "booleanList",
        p: string
    ) {
        // @ts-ignore
        if (e.target?.value == null || e.target?.value == undefined) return;

        // @ts-ignore
        const value = e.target.value;

        if (newTask.type != t) return;

        // @ts-ignore
        if (t == "booleanList") {
            delProp("max");
        } else {
            delProp("label");
        }

        // @ts-ignore
        if (!newTask[p]) newTask[p] = [];

        if (value != "") {
            // @ts-ignore
            newTask[p] = value.split(",").map((v) => {
                if (t == "numberWithButtons") {
                    return parseInt(v.trim());
                } else {
                    return v.trim();
                }
            });
        } else {
            // @ts-ignore
            newTask[p] = [];
        }
    }
</script>

{#if $modalStore[0]}
    <div class="flex flex-col lg:flex-row w-full justify-center">
        <div class="card p-4 w-modal shadow-xl space-y-4 w-full">
            <header class="text-2xl font-bold">{$modalStore[0].title ?? "Add new task"}</header>
            <!-- Enable for debugging: -->
            <form
                class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token"
            >
                <label class="label">
                    <span>Category</span>
                    <select class="select" bind:value={category}>
                        <option value="DAILY">Daily</option>
                        <option value="WEEKLY">Weekly</option>
                        <option value="MONTHLY">Monthly</option>
                        <option value="CUSTOM">Custom</option>
                    </select>
                </label>
                <label class="label">
                    <span>Name</span>
                    <input
                        class="input"
                        type="text"
                        bind:value={taskName}
                        placeholder="Enter task name..."
                    />
                </label>
                <label class="label">
                    <span>Type</span>
                    <select class="select" bind:value={newTask.type}>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                        <option value="booleanList">Boolean List</option>
                        <option value="numberWithButtons">Number with Buttons</option>
                    </select>
                </label>
                {#if newTask.type === "number" || newTask.type === "numberWithButtons"}
                    <label class="label">
                        <span>Max</span>
                        <input
                            class="input"
                            type="number"
                            bind:value={newTask.max}
                            placeholder="Enter max value..."
                            required
                        />
                    </label>
                {:else if newTask.type === "booleanList"}
                    <label class="label">
                        <span>Labels</span>
                        <input
                            class="input"
                            type="text"
                            placeholder="100, 200, 300"
                            on:input={(e) => {
                                onListInput(e, "booleanList", "label");
                            }}
                            required
                        />
                    </label>
                {/if}

                {#if newTask.type == "numberWithButtons"}
                    <label class="label">
                        <span>Buttons</span>
                        <input
                            class="input"
                            type="text"
                            placeholder="100, 200, 300"
                            on:input={(e) => {
                                onListInput(e, "numberWithButtons", "buttons");
                            }}
                            required
                        />
                    </label>
                {/if}
            </form>
            <footer class="modal-footer {parent.regionFooter}">
                <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>Cancel</button>
                <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}
                    >Submit Form</button
                >
            </footer>
        </div>
        <div class="card flex flex-col justify-center items-center w-full lg:w-1/3">
            <h2 class="h2">Preview</h2>
            <div class="h-px w-[90%] bg-secondary-500" />
            {#if newTask.type == "number"}
                <h3 class="h3 underline font-bold text-center px-2 pt-2 text-primary-300">
                    {taskName ? taskName : "(Missing Task Name)"}
                </h3>
                <Button value={0} max={newTask.max ?? 0} />
            {:else if newTask.type == "boolean"}
                <Checkbox value={false} text={taskName ? taskName : "(Missing Task Name)"} />
            {:else if newTask.type == "booleanList"}
                <h3 class="h3 underline font-bold text-center px-2 pt-2 text-primary-300 pb-2">
                    {taskName ? taskName : "(Missing Task Name)"}
                </h3>
                {#if newTask.label}
                    <div>
                        {#each newTask.label as l}
                            <Checkbox value={false} text={l} />
                        {/each}
                    </div>
                {/if}
            {:else if newTask.type == "numberWithButtons"}
                <h3 class="h3 underline font-bold text-center px-2 pt-2 text-primary-300">
                    {taskName ? taskName : "(Missing Task Name)"}
                </h3>
                <span class="pb-2">Max: <strong class="text-center">{newTask.max}</strong></span>
                <div>
                    <input
                        class="input text-center p-1 text-lg border border-primary-500"
                        type="number"
                        value={0}
                    />
                    <br />
                    <hr />
                    <div class="flex flex-row justify-center">
                        {#if newTask.buttons}
                            {#each newTask.buttons as button}
                                <SupportButton value={0} max={newTask.max} step={button} />
                            {/each}
                        {/if}
                        <SupportButton value={0} max={newTask.max} step={newTask.max} />
                    </div>
                </div>
            {/if}
        </div>
    </div>
{/if}
