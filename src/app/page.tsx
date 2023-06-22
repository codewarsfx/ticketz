import Button from "@/components/ui-elements/button";

export default function Home() {
	return (
		<>
			<Button isLoading={true} size='sm'>Hello</Button>
			<Button>Hello</Button>
			<Button  isLoading={true}  size='lg'>Hello</Button>
			<Button isLoading={true}  size='sm'>Hello</Button>
			<Button buttonType='secondary'>Hello</Button>
			<Button size='lg' buttonType='ghost'>
				Hello
			</Button>
		</>
	);
}
