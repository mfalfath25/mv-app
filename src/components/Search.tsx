import { Button, CloseButton, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      search: searchParams.get("search") || "",
    },
    validate: {
      search: (value) =>
        typeof value === "string" && value.length >= 3 ? null : "Input at least 3 characters",
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.validate().hasErrors) return;

    setSearchParams({ search: form.getValues().search });
  };

  const handleClearSearch = () => {
    setSearchParams({});
    form.setValues({ search: "" });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex sm:flex-row flex-col gap-2 pt-4">
        <TextInput
          ref={inputRef}
          label=""
          placeholder="Looking for something?"
          key={form.key("search")}
          {...form.getInputProps("search")}
          rightSection={
            <CloseButton
              aria-label="Clear input"
              onClick={handleClearSearch}
              style={{ display: form.getValues().search ? undefined : "none" }}
            />
          }
        />
        <Button
          type="submit"
          color="red">
          Search
        </Button>
      </div>
    </form>
  );
};

export default Search;
